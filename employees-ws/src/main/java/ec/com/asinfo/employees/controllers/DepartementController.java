package ec.com.asinfo.employees.controllers;

import ec.com.asinfo.employees.models.entity.Department;
import ec.com.asinfo.employees.service.DepartmentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value = "api/department", produces = MediaType.APPLICATION_JSON_VALUE)
public class DepartementController {

	@Autowired  
	private DepartmentService departmentervice;
	
	@GetMapping("/listAll")  
    public List<Department> listAll() {  
         return departmentervice.listAll();            
    }
	
	@GetMapping("/delete/{id}")  
    public boolean delete(@PathVariable Long id) {  
         return departmentervice.delete(id);            
    }
	
	@PostMapping("/save")  
    public Department save(@RequestBody Department department) {  
        return departmentervice.save(department);            
    }
	
}
