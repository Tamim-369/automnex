'use client'
import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface BookCallModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dateOpen, setDateOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Generate time slots from 9 AM to 5 PM
    const timeSlots = Array.from({ length: 17 }, (_, i) => {
        const hour = Math.floor((i + 18) / 2);
        const minute = (i + 18) % 2 === 0 ? '00' : '30';
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return {
            value: `${hour.toString().padStart(2, '0')}:${minute}`,
            label: `${displayHour}:${minute} ${period}`
        };
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.date || !formData.time) {
            setSubmitStatus('error');
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/book-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to book call');
            }

            setSubmitStatus('success');
            // Reset form after 2 seconds and close modal
            setTimeout(() => {
                setFormData({ name: '', email: '', date: '', time: '' });
                setSelectedDate(undefined);
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Error booking call:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDateSelect = (date: Date | undefined) => {
        setSelectedDate(date);
        if (date) {
            setFormData(prev => ({
                ...prev,
                date: date.toISOString().split('T')[0]
            }));
        }
        setDateOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900/85 backdrop-blur-3xl border border-white/15 rounded-2xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Book a Call</h2>
                    <button
                        onClick={onClose}
                        className="text-white/60 hover:text-white transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {submitStatus === 'success' ? (
                    <div className="text-center py-8">
                        <div className="text-green-500 text-xl font-semibold mb-2">
                            Booking Request Sent!
                        </div>
                        <p className="text-white/80">
                            We'll review your request and send you a confirmation email shortly.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Your Name"

                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="bg-gray-800/40 backdrop-blur-sm text-white border 
                            text-base border-white/15 rounded-xl px-3 py-5 focus:outline-none focus:border-white/25 transition-colors"
                        />
                        <Input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-gray-800/40 backdrop-blur-sm text-white border 
                            text-base border-white/15 rounded-xl px-3 py-5 focus:outline-none focus:border-white/25 transition-colors"
                        />
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <Label className="text-white mb-2 block">Date</Label>
                                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full justify-between font-normal bg-gray-800/40 backdrop-blur-sm text-white border border-white/15 rounded-xl px-5 py-3 focus:outline-none focus:border-white/25 transition-colors"
                                        >
                                            {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-transparent backdrop-blur-3xl border border-white/15 rounded-xl" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={handleDateSelect}
                                            initialFocus
                                            className="bg-transparent border-0"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex-1">
                                <Label className="text-white mb-2 block">Time</Label>
                                <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                                    <SelectTrigger className="w-full bg-gray-800/40 backdrop-blur-sm text-white border border-white/15 rounded-xl p-3 focus:outline-none focus:border-white/25 transition-colors">
                                        <SelectValue placeholder="Select time" />
                                    </SelectTrigger>
                                    <SelectContent
                                        className="bg-transparent backdrop-blur-3xl border border-white/15 rounded-xl"
                                        position="popper"
                                        sideOffset={5}
                                    >
                                        {timeSlots.map((slot) => (
                                            <SelectItem
                                                key={slot.value}
                                                value={slot.value}
                                                className="text-white hover:bg-white/10 focus:bg-white/10"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    {slot.label}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {submitStatus === 'error' && (
                            <div className="text-red-500 text-sm">
                                Please select both date and time
                            </div>
                        )}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black py-3 rounded-xl duration-200 font-medium cursor-pointer hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending Request...' : 'Book Call'}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
} 