setTimeout(() => {
    const block = document.querySelector('.block-1');
    const block_1 = document.querySelector('.animate_content')
    const block_2 = document.querySelector('.animate');
    const form = document.querySelector('.form');
    const bg_block = document.querySelector('.bg_block');
    const header = document.querySelector('header');
    if (block) {
        block.style.display = 'none';
        block_1.style.justifyContent = "center";
        block_2.style.display = "none";     
        form.style.display = "flex";
        bg_block.style.display = "none";
        header.style.display = "block";
    }
}, 5000);
