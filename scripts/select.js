const defaultSelect = () => {
    const element = document.querySelector('.custom-select');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
}

defaultSelect();