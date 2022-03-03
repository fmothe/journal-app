export const fileUpload = async (file) =>{
    const cloudinary = 'https://api.cloudinary.com/v1_1/rfmdev/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try{
        const resp = await fetch(cloudinary, {
            method: 'POST',
            body: formData
        })

        if(!resp.ok) throw await resp.json()

        if(resp.ok){
            const respuesta = await resp.json();
            return respuesta.secure_url;
        }

    }catch(error){
        console.log(error)
    }

}