const createReservationAjax = (passenger, flight, saver) => {
  const reservation = {
    passengerInformation: passenger,
    flightInformation   : flight
  };
  saver.saveReservation(reservation);
  return reservation;
};

// 샬럿이 작성한 ReservationSaver
class ReservationSaver {
  saveReservation() {
    /*
     예약 정보를 저장하는 웹 서비스와 연동하는 복잡한 코드.
     책에서는 생략됐지만 테스트를 위해 작성해보았다.
     실제 동작은 예약 정보를 저장하는 코드가 아니라 ajax 통신을 위한 샘플 코드이다.
     테스트를 위해 일부러 존재하지 않는 URI에 요청을 날리는 코드로 작성했다.
     */
    const xhr = new XMLHttpRequest();
    xhr.open("get", "./mock2.json", true);
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) { // 4 means request is done.
        if(xhr.status === 200) { // 200 means status is successful
          for(let key in xhr.response) {
            console.log(`${key}: ${xhr.response[key]}`);
          }
        } else {
          console.error(`http status code: ${xhr.status}`);
        }
      }
    };
    xhr.send();
  }
}