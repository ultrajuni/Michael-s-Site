<script>
document.addEventListener('DOMContentLoaded', () => {
    const bottomButton1 = document.getElementById('bottom-button-1');
    const bottomButton2 = document.getElementById('bottom-button-2');

    bottomButton1.addEventListener('click', () => {
        // Handle the click event for the first bottom button
        alert('Bottom Button 1 clicked!');
    });

    bottomButton2.addEventListener('click', () => {
        // Handle the click event for the second bottom button
        alert('Bottom Button 2 clicked!');
    });
});
</script>