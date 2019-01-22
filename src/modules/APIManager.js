const remoteURL = "http://localhost:5002"

export default {

  connectToData(fetchObject) {

    let dataSet = fetchObject.dataSet;
    let embedItem = fetchObject.embedItem;
    let fetchType = fetchObject.fetchType;
    let dataBaseObject = fetchObject.dataBaseObject;
    let putId = fetchObject.putId;
    let deleteId = fetchObject.deleteId;

    if (fetchType === "GET") {
      return fetch(`${remoteURL}/${dataSet}?${embedItem}`)
        .then(r => r.json())

    } else if (fetchType === "POST") {

      return fetch(`${remoteURL}/${dataSet}`, {
        method: `${fetchType}`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(dataBaseObject),
      })

    } else if (fetchType === "PUT") {
      return fetch(`${remoteURL}/${dataSet}/${putId}`, {
        method: `${fetchType}`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(dataBaseObject),
      })
    } else if (fetchType === "DELETE") {
      return fetch(`${remoteURL}/${dataSet}/${deleteId}` ,{
        method: `${fetchType}`,
      })
    } else {
      console.log("wrong")
    }
  }
}
