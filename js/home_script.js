//Section 2 : UC3
window.addEventListener("DOMContentLoaded", () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =
        "<th>FullName</th>" +
        "<th>Address</th>" +
        "<th>City</th>" +
        "<th>State</th>" +
        "<th>Zip Code</th>" +
        "<th>Phone Number</th>";
    let addressBookContactLocalList = createAddressBookJSON();
    let innerHtml = `${headerHtml}`;
    for (let contactData of addressBookContactLocalList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contactData._fullName}</td>
            <td>${contactData._address}</td>
            <td>${contactData._city}</td>
            <td>${contactData._state}</td>
            <td>${contactData._zip}</td>
            <td>${contactData._phoneNumber}</td>
            <td>
                <img name="${contactData._id}" onclick="remove(this)" alt="delete" src="..//assets/icons/delete-black-18dp.svg">
                <img name="${contactData._id}" onclick="update(this)" alt="edit" src="..//assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookContactLocalList = [{
        _id: "1",
        _fullName: "Toshita Chaudhari",
        _address: "Dombivli, Maharashtra",
        _city: "Dombivli",
        _state: "Maharashtra",
        _zip: "123456",
        _phoneNumber: "9834940036",
    },
    {
        _id: "2",
        _fullName: "Akshay Chaudhari",
        _address: "Thane, Maharashtra",
        _city: "Thane",
        _state: "Maharashtra",
        _zip: "789101",
        _phoneNumber: "9129008009",
    }
    ];
    return addressBookContactLocalList;
}