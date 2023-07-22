import React, { useState } from 'react';

interface NotificationProps {
    message: string;
    isError: boolean;
    onClose: () => void;
}

const Notification = ({ message, isError, onClose }: NotificationProps) => {
    const bgColor = isError ? 'bg-red-100' : 'bg-green-100';
    const icon = isError ? '❌' : '✅';

    return (
        <div className={`flex flex-row absolute top-28 right-2 mr-4 py-2 animate-slideInLeft hover:opacity-80 rounded-md shadow-lg ${bgColor}`}>
            <button
                className="ml-4  text-gray-600"
                onClick={onClose}
            >
                X
            </button>
            <div className="ml-4 mr-4">{message} {icon}</div>
        </div>
    );
};

export { Notification };
