package ec.com.asinfo.employees.controllers;

import ec.com.asinfo.employees.core.util.model.dto.SelectorDTO;
import ec.com.asinfo.employees.models.entity.Employee;
import ec.com.asinfo.employees.service.EmployeeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value = "api/employee", produces = MediaType.APPLICATION_JSON_VALUE)
public class EmployeeController {

	@Autowired  
	private EmployeeService employeeservice;
	
	@GetMapping("/listAll")  
    public List<Employee> listAll() {  
         return employeeservice.listAll();  
    }
	
	@GetMapping("/findForSelector")  
    public List<SelectorDTO> findForSelector() {  
         return employeeservice.findForSelector();  
          
    }
	
	@PostMapping("/save")  
    public Employee save(@RequestBody Employee employee) {  
        return employeeservice.save(employee);            
    }
}
