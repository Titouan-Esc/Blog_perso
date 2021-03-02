import React, { useState, useEffect } from 'react';

const Formulaire = () => {
    const[titre, setTitre] = useState("");
    const [contenu, setContenu] = useState("");
    const [submit, setSubmit] = useState(false);
    const [post, setPost] = useState([]);

    useEffect(() => {
        console.log(post);
    }, [submit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        setPost({
            ...{titre},
            ...{contenu},
        });
        console.log(post);
    }




    return (
        <div className="formulaire">
            <form onSubmit={handleSubmit}>

                <label htmlFor="titre">Ecrivez votre titre</label>
                <input type="text" name="titre" value={titre} onChange={(e) => setTitre(e.target.value)}/>

                <label htmlFor="contenu">Votre contenu</label>
                <textarea name="contenu" id="" cols="30" rows="10" value={contenu} onChange={(e) => setContenu(e.target.value)}></textarea>

                <input type="submit" value="Publication"/>

            </form>
        </div>
    )
}

export default Formulaire
