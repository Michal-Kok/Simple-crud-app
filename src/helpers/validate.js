import db from '../firebase';

export const validate = (values, setEditing, id) => {

    const postData = (values) => {
    
        db.collection("products").doc(id).set(values)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    const { cmp_name, keywords, bid_amount, cmp_fund, status, town, radius } = values;
    const arr = [cmp_name, keywords, cmp_fund, status, radius];
    let error = '';

    arr.forEach(item => {
        if (item === "") error = 'Fill all mandatory fields.';
    });

    if (bid_amount < 50) error = "Bid amount is too low";

    if (!error) {
        postData(values);
        setEditing(false);
    }
    return error;
}