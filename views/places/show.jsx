const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main className="show-main">
                <div>
                   <img src={data.place.pic}></img>
                </div>
                <div>
                    <h1>{data.place.name}</h1>
                    <section>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                    </section>
                    <section>
                        <h2>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state}</p>
                    </section>
                    <section>
                        <h2>Comments</h2>
                        <p>No Comments yet!</p>
                    </section>
                </div>
            </main>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>     
            <br/>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
    
        </Def>
    )
}

module.exports = show