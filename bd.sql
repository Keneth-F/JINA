CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    owner VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    bgColor VARCHAR(255),
    FOREIGN KEY (owner) REFERENCES users (email) ON DELETE CASCADE
);

CREATE TABLE stages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    `order` INT NOT NULL,
    project INT,
    FOREIGN KEY (project) REFERENCES projects (id) ON DELETE CASCADE
);

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    `order` INT NOT NULL,
    label VARCHAR(255),
    stage INT,
    FOREIGN KEY (stage) REFERENCES stages (id) ON DELETE CASCADE
);

CREATE TABLE project_team (
    project_id INT,
    team_member_email VARCHAR(255),
    PRIMARY KEY (project_id, team_member_email),
    FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
    FOREIGN KEY (team_member_email) REFERENCES users (email) ON DELETE CASCADE
);

CREATE TABLE ticket_team (
    ticket_id INT,
    team_member_email VARCHAR(255),
    PRIMARY KEY (ticket_id, team_member_email),
    FOREIGN KEY (ticket_id) REFERENCES tickets (id) ON DELETE CASCADE,
    FOREIGN KEY (team_member_email) REFERENCES users (email) ON DELETE CASCADE
);