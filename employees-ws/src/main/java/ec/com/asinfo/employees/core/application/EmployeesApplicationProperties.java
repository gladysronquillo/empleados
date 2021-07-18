package ec.com.asinfo.employees.core.application;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties
public class EmployeesApplicationProperties {

	@Value("${spring.datasource.driver-class-name}")  
    private String DB_DRIVER;  

    @Value("${spring.datasource.password}")  
    private String DB_PASSWORD;  

    @Value("${spring.datasource.url}")  
    private String DB_URL;  

    @Value("${spring.datasource.username}")  
    private String DB_USERNAME;  

    @Value("${hibernate.dialect}")  
    private String HIBERNATE_DIALECT;  

    @Value("${spring.jpa.generate-ddl}")
	private Boolean GENERATE_DDL;

	@Value("${spring.jpa.show-sql}")
	private Boolean SHOW_SQL;
	
    @Value("${spring.jpa.properties.hibernate.hbm2ddl-auto}")
    private String HIBERNATE_HBM2DDL_AUTO;  

    private static EmployeesApplicationProperties appProperties;
    
    private EmployeesApplicationProperties() {    	
    }
    
    public static EmployeesApplicationProperties getAppProperties() {
    	if(appProperties == null) {
    		appProperties = new EmployeesApplicationProperties();
    	}
    	return appProperties;
    }

	public String getDB_DRIVER() {
		return DB_DRIVER;
	}

	public String getDB_PASSWORD() {
		return DB_PASSWORD;
	}

	public String getDB_URL() {
		return DB_URL;
	}

	public String getDB_USERNAME() {
		return DB_USERNAME;
	}

	public String getHIBERNATE_DIALECT() {
		return HIBERNATE_DIALECT;
	}

	public Boolean getGENERATE_DDL() {
		return GENERATE_DDL;
	}

	public Boolean getSHOW_SQL() {
		return SHOW_SQL;
	}

	public String getHIBERNATE_HBM2DDL_AUTO() {
		return HIBERNATE_HBM2DDL_AUTO;
	}
    
}
