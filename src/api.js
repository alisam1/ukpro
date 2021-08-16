export const request = async (data) => {

    const baseUrl = "https://team.upro-dev.ml/forms/notify/";
    const headers = {"Content-Type": "application/json;charset=utf-8"};

    const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    });

    console.log('response', response);

    return response;
};

export const cloudPaymentsRequestServer = async (endpoint, token) => {
    const response = await fetch(`https://payments.prometey82.com/api/v1/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": token,
        }
    })

    await response.json()
}


