function SubscribeComponent(){
    return`
            <div class="container py-5 px-4 bg-secondary text-center">
                <h1 class="text-white font-weight-bold">Subscribe My Newsletter</h1>
                <p class="text-white">Subscribe and get my latest article in your inbox</p>
                <form class="form-inline justify-content-center">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Your Email">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
    `;
}
var back = document.getElementsByTagName('SubscribeComponent');
for(let spin of back){
    spin.innerHTML = SubscribeComponent();
}