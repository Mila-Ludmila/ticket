  const availableSeats = []; // Масив для збереження вільних місць
  const bookedTickets = [];   // Масив для збереження заброньованих квитків

  function showFreeSeats() {
      const direction = document.getElementById("direction").value;
      const date = document.getElementById("date").value;
      const ticketPrice = parseFloat(document.getElementById("ticketPrice").value);

            // Симулюємо виведення доступних місць (наприклад, 1-50)
      const seatSelection = document.getElementById("seatSelection");
            seatSelection.innerHTML = "";

        for (let i = 1; i <= 50; i++) {
                const seatButton = document.createElement("button");
                seatButton.textContent = i;
                seatButton.onclick = () => bookSeat(i, ticketPrice);
                seatSelection.appendChild(seatButton);
                seatButton.classList.toggle('button_num');
            }
        }

  function bookSeat(seatNumber, ticketPrice) {
          // Перевірка, чи це місце вже було заброньовано
      if (bookedTickets.includes(seatNumber)) {
              alert(`Місце ${seatNumber} вже заброньовано.`);
              return;
          }

          bookedTickets.push(seatNumber); // Додаємо місце до заброньованих
      const bookedTicketsList = document.getElementById("bookedTickets");
      const listItem = document.createElement("li");
          listItem.textContent = `Місце ${seatNumber} (${ticketPrice} грн)`;
          bookedTicketsList.appendChild(listItem);

          // Розраховуємо та оновлюємо загальну вартість
      const totalCost = bookedTickets.reduce((total, seat) => total + ticketPrice, 0);
      const totalCostDisplay = document.getElementById("totalCost");
          totalCostDisplay.textContent = `Загальна вартість: ${totalCost} грн`;

          // Видаляємо місце з доступних
    const seatButton = document.querySelector(`#seatSelection button:nth-child(${seatNumber})`);
          if (seatButton) {
              seatButton.remove();
          }
      }