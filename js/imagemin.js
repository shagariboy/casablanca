
import imageminWebp from 'imagemin-webp';

(async () => {
    await imagemin(['./public/image/*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [
            imageminWebp({ quality: 50 })
        ]
    });

    console.log('Images optimized');
})();