        if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', ready)
        } else {
            ready()
        }

        function ready() {

            var addToCartButtons = document.getElementsByClassName('shop-item-button')
            for (var i = 0; i < addToCartButtons.length; i++) {
                var button = addToCartButtons[i]
                button.addEventListener('click', addToCartClicked)
            }

            // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
        }

        function addToCartClicked(event) {
            var button = event.target
            var shopItem = button.parentElement.parentElement
            var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
            var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
            addItemToCart(title, imageSrc)
        }

        function addItemToCart(title, imageSrc) {
            var cartRow = document.createElement('div')
            cartRow.classList.add('cart-row')
            var cartItems = document.getElementsByClassName('cart-items')[0]
            var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
            console.log(cartItemNames)
            for (var i = 0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == title) {
                    alert('This item is already added to the cart')
                    return
                }
            }
            var cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${imageSrc}" width="70" height="100">
                    <span class="cart-item-title"><pre>     ${title}</pre></span>
                </div><div>
                    <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                `
            cartRow.innerHTML = cartRowContents
            cartItems.append(cartRow)
            cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        }






