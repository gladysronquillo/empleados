package ec.com.asinfo.employees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ec.com.asinfo.employees.models.entity.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long>  {

}
