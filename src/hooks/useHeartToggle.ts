
import { useState, useEffect } from 'react';

export const useHeartToggle = (storageKey: string, defaultValue: boolean = false) => {
    const [isToggled, setIsToggled] = useState(defaultValue);

    useEffect(() => {
        const savedValue = localStorage.getItem(storageKey);
        if (savedValue) {
            setIsToggled(JSON.parse(savedValue));
        }
    }, [storageKey]);

    const toggle = () => {
        const newValue = !isToggled;
        setIsToggled(newValue);
        localStorage.setItem(storageKey, JSON.stringify(newValue));
    };

    const setValue = (value: boolean) => {
        setIsToggled(value);
        localStorage.setItem(storageKey, JSON.stringify(value));
    };

    return { isToggled, toggle, setValue };
};

useHeartToggle