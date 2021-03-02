import React, { useState, useEffect } from 'react';


const Contact = () => {
    return (
        <div className="formulaire">
            <form>

                <label htmlFor="titre">Ecrivez votre titre</label>
                <input type="text" name="titre"/>

                <label htmlFor="contenu">Votre contenu</label>
                <textarea name="contenu" id="" cols="30" rows="10"></textarea>

                <input type="submit" value="Publication"/>

            </form>
        </div>
    )
}

export default Contact
