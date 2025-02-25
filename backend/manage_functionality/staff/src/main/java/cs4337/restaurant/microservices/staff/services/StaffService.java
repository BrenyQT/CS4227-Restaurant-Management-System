package cs4337.restaurant.microservices.staff.services;

import cs4337.restaurant.microservices.staff.entities.Staff;
import cs4337.restaurant.microservices.staff.repositories.StaffRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StaffService {
    private StaffRepository staffRepository;

    public void addNewStaff(Staff staff){

    }

    public void deleteStaff(Staff staff){

    }

    public void updateStaff(Staff staff){

    }
}

