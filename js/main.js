document.addEventListener('DOMContentLoaded', () => {
    function updateCountdown() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        let year = date.getFullYear();
        
        if(month === 12 && day > 25) {
            year += 1;
        }

        const christmasDate = new Date(`December 25, ${year} 00:00:00`).getTime();

        const now = new Date().getTime();
        const timeRemaining = christmasDate - now;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('render').innerHTML = `${days}d -${hours < 10 ? '0' : ''}${hours}h -${minutes < 10 ? '0' : ''}${minutes}m -${seconds < 10 ? '0' : ''}${seconds}s`;
        } else {
            document.getElementById('render').innerHTML = 'Feliz Natal!';
        }
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
});