package ec.com.asinfo.employees.controllers;

import ec.com.asinfo.employees.models.entity.Employee;
import ec.com.asinfo.employees.service.EmployeeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@RequestMapping(value = "api/employee", produces = MediaType.APPLICATION_JSON_VALUE)
//@RequestMapping("employee")
public class EmployeeController {

	@Autowired  
	private EmployeeService employeeservice;
	
	@CrossOrigin
	@GetMapping("/listAll")  
    public List<Employee> listAll() {  
         return employeeservice.listAll();  
          
    }
	
	@CrossOrigin
	@GetMapping("/hello")  
    public String hello() {  
         return "hola mundo";  
          
    }
}
