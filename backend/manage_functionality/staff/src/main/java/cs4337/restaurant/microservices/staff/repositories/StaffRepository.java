package cs4337.restaurant.microservices.staff.repositories;

import cs4337.restaurant.microservices.staff.entities.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<Staff, Long>{

}
