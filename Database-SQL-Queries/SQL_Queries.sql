################################################################## Initialize Tables ##################################################################

CREATE TABLE Passenger
(
  PassengerID CHAR(10) NOT NULL,
  DOB DATE NOT NULL,
  FirstName VARCHAR(32) NOT NULL,
  LastName VARCHAR(32) NOT NULL,
  Email VARCHAR(50) NOT NULL UNIQUE,
  Password VARCHAR(26) NOT NULL,
  PhoneNumber CHAR(10) NOT NULL,
  PRIMARY KEY (PassengerID)
);

CREATE TABLE CreditCard
(
  CardNum INT NOT NULL,
  PassengerID CHAR(10),
  PRIMARY KEY (CardNum),
  FOREIGN KEY (PassengerID) REFERENCES Passenger(PassengerID)
);

CREATE TABLE Seat
(
  SeatNumber INT NOT NULL,
  Status VARCHAR(10) NOT NULL,
  PRIMARY KEY (SeatNumber)
);

CREATE TABLE FirstClass
(
  FirstClassPrice INT NOT NULL,
  SeatNumber INT NOT NULL,
  PRIMARY KEY (SeatNumber),
  FOREIGN KEY (SeatNumber) REFERENCES Seat(SeatNumber)
);

CREATE TABLE Business
(
  BusinessPrice INT NOT NULL,
  SeatNumber INT NOT NULL,
  PRIMARY KEY (SeatNumber),
  FOREIGN KEY (SeatNumber) REFERENCES Seat(SeatNumber)
);

CREATE TABLE Economy
(
  EconomyPrice INT NOT NULL,
  SeatNumber INT NOT NULL,
  PRIMARY KEY (SeatNumber),
  FOREIGN KEY (SeatNumber) REFERENCES Seat(SeatNumber)
);

CREATE TABLE Admin
(
  AdminID CHAR(10) NOT NULL,
  AdminFirstName VARCHAR(32) NOT NULL,
  AdminLastName VARCHAR(32) NOT NULL,
  AdminPassword VARCHAR(26) NOT NULL,
  PRIMARY KEY (AdminID)
);

CREATE TABLE Aircraft
(
  FirstFlightDate DATE NOT NULL,
  AircraftID CHAR(10) NOT NULL,
  NumberOfSeats INT,
  LastMaintenance DATE,
  NextMaintenance DATE,
  AircraftType VARCHAR(32) NOT NULL,
  SeatNumber INT,
  PRIMARY KEY (AircraftID),
  FOREIGN KEY (SeatNumber) REFERENCES Seat(SeatNumber)
);

CREATE TABLE Flight
(
  FlightNum CHAR(5) NOT NULL,
  Date DATE NOT NULL,
  Time CHAR(5) NOT NULL,
  SourceCity VARCHAR(58) NOT NULL,
  DestinationCity VARCHAR(58) NOT NULL,
  AircraftID CHAR(10) NOT NULL,
  PRIMARY KEY (FlightNum),
  FOREIGN KEY (AircraftID) REFERENCES Aircraft(AircraftID)
);

CREATE TABLE Ticket
(
  TicketNumber CHAR(5) NOT NULL,
  BagWeight INT,
  FlightNum CHAR(5) NOT NULL,
  SeatNumber INT NOT NULL,
  PassengerID CHAR(10) NOT NULL,
  PRIMARY KEY (TicketNumber),
  FOREIGN KEY (FlightNum) REFERENCES Flight(FlightNum),
  FOREIGN KEY (SeatNumber) REFERENCES Seat(SeatNumber),
  FOREIGN KEY (PassengerID) REFERENCES Passenger(PassengerID)
);

CREATE TABLE Manages
(
  AdminID CHAR(10) NOT NULL,
  TicketNumber CHAR(5) NOT NULL,
  PRIMARY KEY (AdminID),
  FOREIGN KEY (AdminID) REFERENCES Admin(AdminID),
  FOREIGN KEY (TicketNumber) REFERENCES Ticket(TicketNumber)
);

CREATE TABLE BookingInformation
(
  BookingStatus VARCHAR(10) NOT NULL,
  CancelationFine INT,
  PassengerID CHAR(10) NOT NULL,
  TicketNumber CHAR(5) NOT NULL,
  PRIMARY KEY (PassengerID, TicketNumber),
  FOREIGN KEY (PassengerID) REFERENCES Passenger(PassengerID),
  FOREIGN KEY (TicketNumber) REFERENCES Ticket(TicketNumber)
);

################################################################### Back-end Queries ##################################################################

#insert user info (sign up)
INSERT INTO Passenger (FirstName, LastName, DOB, PhoneNumber, Email, PassengerID, Password) Values ($1, $2, $3, $4, $5, $6, $7)

#fetch the user email and password (login) note: the ID is used to store in browser cookies to keep user logged in
SELECT email, password, passengerid FROM passenger WHERE email = ${email}  AND Password = ${password}

#fetch the admin ID and password (login)
SELECT adminid, adminpassword FROM Passenger WHERE Email = ${adminID}  AND Password = ${adminPassword}

#display all of the user's tickets
SELECT * FROM (SELECT * FROM ticket JOIN flight ON ticket.flightnum = flight.flightnum AND passengerid = ${passengerid}) AS dt

#display all of the user's (active tickets/ confirmed payments)
SELECT * FROM (SELECT * FROM ticket JOIN flight ON ticket.flightnum = flight.flightnum AND passengerid = ${passengerid}) AS dt
WHERE flightNum = (SELECT flightNum FROM bookingInformation WHERE status = 'confirmed')

#display all of the user's (active tickets/ confirmed payments)
SELECT * FROM (SELECT * FROM ticket JOIN flight ON ticket.flightnum = flight.flightnum AND passengerid = ${passengerid}) AS dt
WHERE flightNum = (SELECT flightNum FROM bookingInformation WHERE status = 'canceled')

#add a new aircraft
INSERT INTO aircraft VALUES (${firstFlightDate}, ${aircraftID},${countSeats()}} , ${lastMaintenance}, ${nextMaintenance}, ${aircraftType}, NULL);

#add a new flight										
INSERT INTO flight VALUES (${flightNum}, ${flightDate},${flightTime}, ${srcCity}, ${dstCity}, ${aircraftID});

#add a new ticket
INSERT INTO tickets VALUES (${ticketID}, ${baggageWeight}, ${flightNum}, ${seatNum}, ${passengerID});

#display all (active tickets/ confirmed payments)
SELECT * FROM flight WHERE flightNum = (SELECT flightNum FROM bookingInformation WHERE status = 'confirmed');

#display all canceled tickets
SELECT * FROM flight WHERE flightNum = (SELECT flightNum FROM bookingInformation WHERE status = 'canceled');

