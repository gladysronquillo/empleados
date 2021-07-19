package ec.com.asinfo.employees.core.util.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class SelectorDTO  {

	protected Long id;
	protected String name;
	
	public SelectorDTO() {
	}
	
	public SelectorDTO (Long id, String name) {
		super();
		this.id=id;
		this.name=name;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
