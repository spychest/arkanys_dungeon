export default class TimeService {
    static getTimeAsString(time) {
        const weeks = Math.floor(time / 604800);
        const days = Math.floor(time / 86400);
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        const parts = [];
        if (weeks > 0) parts.push(`${weeks} week${weeks > 1 ? 's' : ''}`);
        if (days % 7 > 0) parts.push(`${days % 7} day${days % 7 > 1 ? 's' : ''}`);
        if (hours % 24 > 0) parts.push(`${hours % 24} hour${hours % 24 > 1 ? 's' : ''}`);
        if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
        if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
        return parts.join(' ');
    }
}