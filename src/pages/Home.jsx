import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to My Food Shop</h1>
            <p>Delicious meals, fresh ingredients, and fast delivery!</p>

            <div className="food-gallery">
                <div className="food-card">
                    <img src="https://th.bing.com/th/id/R.697e50f9cf7c083b5d475cfaabbf4fe5?rik=PZE4EGYHytXIgA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-xKZmaz86O8o%2fUxC9_-NJSnI%2fAAAAAAAAAcI%2fkU_TsyBSR80%2fs1600%2fpizza.jpg&ehk=0OjsRK5Kd0K3TyzZ7vie55o3X5LXb6ZGaORv0pa2mDc%3d&risl=&pid=ImgRaw&r=0" alt="Pizza" className='food-image' />
                    <h2>Pizza</h2>
                    <p>₹999</p>
                    <p>Classic cheese pizza with tomato sauce and mozzarella.</p>
                </div>
                <div className="food-card">
                    <img src="https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_mobile_0_z7ruzb" alt="Burger" className='food-image'/>
                    <h2>Burger</h2>
                    <p>₹160</p>
                    <p>Crispy chicken patty with lettuce and mayo in a soft bun.</p>
                </div>
                <div className="food-card">
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/39/1d/51/391d511811a7c3d4624a33b613cee93d.jpg" alt="Pasta" className='food-image'/>
                    <h2>Pasta</h2>
                    <p>₹180</p>
                    <p>Italian-style spaghetti tosted with tomato basil sauce.</p>
                </div>
                <div className="food-card">
                    <img src="https://wallpapers.com/images/hd/biryani-on-a-platter-w2kq1iibng087v1b.jpg" alt="Biryani" className='food-image' />
                    <h2>Biryani</h2>
                    <p>₹280</p>
                    <p>Spicy and aromatic rice with tender chicken pieces.</p>
                </div>
                <div className="food-card">
                    <img src="https://th.bing.com/th/id/R.697e50f9cf7c083b5d475cfaabbf4fe5?rik=PZE4EGYHytXIgA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-xKZmaz86O8o%2fUxC9_-NJSnI%2fAAAAAAAAAcI%2fkU_TsyBSR80%2fs1600%2fpizza.jpg&ehk=0OjsRK5Kd0K3TyzZ7vie55o3X5LXb6ZGaORv0pa2mDc%3d&risl=&pid=ImgRaw&r=0" alt="Pizza" className='food-image' />
                    <h2>Pizza</h2>
                    <p>₹999</p>
                    <p>Classic cheese pizza with tomato sauce and mozzarella.</p>
                </div>
                <div className="food-card">
                    <img src="https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_mobile_0_z7ruzb" alt="Burger" className='food-image'/>
                    <h2>Burger</h2>
                    <p>₹160</p>
                    <p>Crispy chicken patty with lettuce and mayo in a soft bun.</p>
                </div>
                <div className="food-card">
                    <img src="https://s-media-cache-ak0.pinimg.com/originals/39/1d/51/391d511811a7c3d4624a33b613cee93d.jpg" alt="Pasta" className='food-image'/>
                    <h2>Pasta</h2>
                    <p>₹180</p>
                    <p>Italian-style spaghetti tosted with tomato basil sauce.</p>
                </div>
                <div className="food-card">
                    <img src="https://wallpapers.com/images/hd/biryani-on-a-platter-w2kq1iibng087v1b.jpg" alt="Biryani" className='food-image' />
                    <h2>Biryani</h2>
                    <p>₹280</p>
                    <p>Spicy and aromatic rice with tender chicken pieces.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
