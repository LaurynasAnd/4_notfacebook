function timestampToTimeAgo(timestamp) {
    const now = Date.now();
    const sec = Math.floor((now - timestamp)/1000);
    console.log(sec, 's');

    if (sec < 16) {
        return 'Just now'
    }
    if (sec < 60) {
        return sec + 's ago';
    }
    const min = (sec - sec % 60)/60;
    if (min < 60) {
        return min + 'min ago';
    }
    const hour = (min - min % 60)/60;
    if (hour < 24) {
        return hour + 'h ago';
    }
    const days = (hour - hour % 24)/24;
    if (days < 7) {
        return days + 'days ago';
    }
    const week = (days- days%7)/7;
    if (days < 36) {
        return days + 'weeks ago';
    }
    const months = (days- days%31)/31;
    if (days < 366) {
        return days + 'months ago';
    }
    return ((days - days%365) / 365) + 'years ago';
}

export default timestampToTimeAgo;