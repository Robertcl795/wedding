
<script>
    import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
</script>
<section id="details" class="details-container">
    <a class="card bg-initial card-hover overflow-hidden" href="/elements/cards">
        <header>
            <img src="/photos/P2.jpg" class="bg-black/50 w-full aspect-[4/4]" alt="Post" />
        </header>
        <div class="p-4 space-y-4">
            <h6 class="h6" data-toc-ignore>Announcements</h6>
            <h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
            <article>
                <p>
                    <!-- cspell:disable -->
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore
                    sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
                    <!-- cspell:enable -->
                </p>
            </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
            <Avatar src="/photos/P1.jpg" width="w-8" />
            <div class="flex-auto flex justify-between items-center">
                <h6 class="font-bold" data-toc-ignore>By Alex</h6>
                <small>On {new Date().toLocaleDateString()}</small>
            </div>
        </footer>
    </a>
    <a class="card bg-initial card-hover overflow-hidden" href="/elements/cards">
        <header>
            <img src="/photos/P2.jpg" class="bg-black/50 w-full aspect-[4/4]" alt="Post" />
        </header>
        <div class="p-4 space-y-4">
            <h6 class="h6" data-toc-ignore>Announcements</h6>
            <h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
            <article>
                <p>
                    <!-- cspell:disable -->
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore
                    sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
                    <!-- cspell:enable -->
                </p>
            </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
            <Avatar src="/photos/P1.jpg" width="w-8" />
            <div class="flex-auto flex justify-between items-center">
                <h6 class="font-bold" data-toc-ignore>By Alex</h6>
                <small>On {new Date().toLocaleDateString()}</small>
            </div>
        </footer>
    </a>
</section>

<style>
    .details-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2rem;
        gap: 2rem;
    }
</style>