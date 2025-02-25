package cs4337.restaurant.microservices.staff.controllers;

import cs4337.restaurant.microservices.staff.entities.Staff;
import cs4337.restaurant.microservices.staff.services.StaffService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController("/staff")
public class StaffController {
    private final StaffService staffService;

    @PostMapping("/add")
    public ResponseEntity<Object> addStaff(@RequestBody Staff staff){
        this.staffService.addNewStaff(staff);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/update")
    public ResponseEntity<Object> updateStaff(@RequestBody Staff staff){
        this.staffService.updateStaff(staff);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/delete")
    public ResponseEntity<Object> deleteStaff(@RequestBody Staff staff){
        this.staffService.deleteStaff(staff);
        return ResponseEntity.ok().build();
    }
}
