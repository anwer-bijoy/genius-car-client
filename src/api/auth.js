export const authToken = (user, navigate, from) => {
    const currentUser = {
        email: user.email
    }
    //get jwt token 
    fetch('https://genius-car-server-one-liard.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            //local storage is easiest but not the best place to store data
            localStorage.setItem('genius-token', data.token);

            //navigate where to go
            navigate(from, { replace: true });
        })
}