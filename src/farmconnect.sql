CREATE TABLE User (
    idUser VARCHAR(20) PRIMARY KEY,
    age INTEGER,
    ville VARCHAR(30),
    justificatif BLOB,
    email VARCHAR(30),
    motDePasseHash VARCHAR(255) NOT NULL,
    profession VARCHAR(30) CHECK (profession IN ('consommateur', 'ingénieur', 'agriculteur', 'commerçant'))
);

CREATE TABLE Agriculteur (
    idUser VARCHAR(20) PRIMARY KEY REFERENCES User(idUser)
);

CREATE TABLE Ingenieur (
    idUser VARCHAR(20) PRIMARY KEY REFERENCES User(idUser),
    specialite VARCHAR(50)
);

CREATE TABLE Commercant (
    idUser VARCHAR(20) PRIMARY KEY REFERENCES User(idUser)
);

CREATE TABLE Consommateur (
    idUser VARCHAR(20) PRIMARY KEY REFERENCES User(idUser),
    justificatif VARCHAR(30) DEFAULT 'none'
);

CREATE TABLE DemandeLocation (
    codeD VARCHAR(20) PRIMARY KEY,
    duree VARCHAR(20) NOT NULL,
    equipement VARCHAR(20),
    idloc VARCHAR(20),
    FOREIGN KEY (equipement) REFERENCES Equipement(codeE),
    FOREIGN KEY (idloc) REFERENCES Agriculteur(idUser)
        CHECK (SELECT profession FROM User WHERE idUser = idloc) = 'agriculteur',
    FOREIGN KEY (idloc) REFERENCES Ingenieur(idUser)
        CHECK (SELECT profession FROM User WHERE idUser = idloc) = 'ingénieur'
);

CREATE TABLE Equipement (
    codeE VARCHAR(20) PRIMARY KEY,
    prix INTEGER,
    description VARCHAR(255),
    idOwner VARCHAR(20),
    CONSTRAINT fk_idOwner_agri FOREIGN KEY (idOwner) REFERENCES Agriculteur(idUser) ON DELETE CASCADE
        CHECK (SELECT profession FROM User WHERE idUser = idOwner) = 'agriculteur',
    CONSTRAINT fk_idOwner_inge FOREIGN KEY (idOwner) REFERENCES Ingenieur(idUser) ON DELETE CASCADE
        CHECK (SELECT profession FROM User WHERE idUser = idOwner) = 'ingénieur'
);

CREATE TABLE Tuto (
    codeT VARCHAR(20) PRIMARY KEY,
    vd_img BLOB,
    url VARCHAR(255),
    description VARCHAR(255),
    idP VARCHAR(20),
    date_p DATE,
    heure TIME,
    CONSTRAINT fk_idP_inge FOREIGN KEY (idP) REFERENCES Ingenieur(idUser)
        CHECK (SELECT profession FROM User WHERE idUser = idP) = 'ingénieur'
);

CREATE TABLE consulter (
    codeC VARCHAR(20) PRIMARY KEY,
    idUser VARCHAR(20),
    codeT VARCHAR(20),
    likes INTEGER DEFAULT 0,
    CONSTRAINT fk_idUser_agri FOREIGN KEY (idUser) REFERENCES Agriculteur(idUser)
        CHECK (SELECT profession FROM User WHERE idUser = idUser) = 'agriculteur',
    CONSTRAINT fk_idUser_inge FOREIGN KEY (idUser) REFERENCES Ingenieur(idUser)
        CHECK (SELECT profession FROM User WHERE idUser = idUser) = 'ingénieur',
    FOREIGN KEY (codeT) REFERENCES Tuto(codeT)
);
