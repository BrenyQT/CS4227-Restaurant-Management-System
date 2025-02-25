package cs4337.restaurant.microservices.staff.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "staff")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;
    private String rate;
    private String hours;
}
