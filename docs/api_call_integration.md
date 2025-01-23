## API CALL INTEGRATION
- >API stands for application programming interface.
- >It is used to get response from server side to client side.
- >It can called using HttpClient(Angular) or fetch(javascript).
- >We have mutiple APIs like SOAP, RPS, Websocket and REST.
- >Widely used is REST API's which includes client sends request to server and server sends response back to client.
- >REST API's has functions like GET, PUT, POST, DELETE, etc.


### GET API
- >It is used to get all the data or information from endpoint provided.
- >It can be done using get method of HTTPClient.
- >Sample code:
```ts
// http is HTTPClient
this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
    this.userList = result;
})
```

### POST API
- >To create a new instance of data and its subsequent field.
- >It can be done using post method of HTTPCLient.
- >Sample code:
```ts
carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "regNo": ""
};
onSave() {
    debugger;
    this.http.post('/api/CarRentalApp/CreateNewCar', this.carObj).subscribe((res: any) => {
        if (res.result) {
            alert('Car added successfully');
            this.getAllCar();
        } else {
            console.log(res.message);
        }
    })
}
```

### PUT API
- >PUT call is used to update or modify the field or data present already.
- >It can be done using put method of HTTPClient.
- >Primary key/ ID is used to implement this API call.
```ts
onEdit(value: any) {
    this.carObj = value;
}
updateCar() {
    this.http.put('/api/CarRentalApp/UpdateCar', this.carObj).subscribe((res: any) => {
        if (res.result) {
            alert('Car updates successfully');
            this.getAllCar();
        } else {
        console.log(res.message);
        }
    })
}
```

### DELETE API
- >It deletes or removes the specific record from the table/databases.
- >Main property is ID attribute or primary key is used to implement this API call.
- >Implemented using delete method of HTTPClient.
- >Sample code:
```ts
// to delete the car details by using its ID
onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this car?');
    if (isDelete) {
        this.http.delete(`/api/CarRentalApp/DeleteCarbyCarId?carid=${id}`).subscribe((res: any) => {
            if (res.result) {
                alert('Car deleted successfully');
                this.getAllCar();
            } else {
                console.log(res.message);
            }
        })
    }
}
```