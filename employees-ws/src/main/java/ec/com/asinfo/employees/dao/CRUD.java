package ec.com.asinfo.employees.dao;

import java.util.List;

public interface CRUD<T> {

	List<T> listAll();
	T findById(Long id);
	T save(T object);
	boolean delete(Long id);
}
