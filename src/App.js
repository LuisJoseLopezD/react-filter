import React, {useState} from "react";
import Nav from './components/Nav';
import Card from './components/Card';
import data from './helpers/data';

const App = () => {

    const [categories, setCategories] = useState("");

    return (

        <>
            <Nav data={data} setCategories={setCategories} />

            <div className="w-full flex flex-wrap">
                {data.map((item, index) => (
                    item.category.includes(categories) && (
                        <Card
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            img={item.img}
                        />
                    )
                ))}
            </div>
        </>
    );
}

export default App;
