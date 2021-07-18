package ec.com.asinfo.employees.core.bean;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import ec.com.asinfo.employees.core.application.EmployeesApplicationProperties;
import ec.com.asinfo.employees.core.util.utility.AppConstants;

@Configuration
@EnableTransactionManagement(proxyTargetClass = true)
@EnableJpaRepositories(basePackages = { AppConstants.PREFIX_PACKAGE_CORE, AppConstants.PREFIX_PACKAGE_CONTROLLERS,
		AppConstants.PREFIX_PACKAGE_DAO, AppConstants.PREFIX_PACKAGE_MODELS,
		AppConstants.PREFIX_PACKAGE_SERVICE, AppConstants.PREFIX_PACKAGE_REPOSITORY }, entityManagerFactoryRef = "entityManagerFactory", transactionManagerRef = "transactionManager")
public class DatabaseBeans {

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(EmployeesApplicationProperties.getAppProperties().getDB_DRIVER());
		dataSource.setUrl(EmployeesApplicationProperties.getAppProperties().getDB_URL());
		dataSource.setUsername(EmployeesApplicationProperties.getAppProperties().getDB_USERNAME());
		dataSource.setPassword(EmployeesApplicationProperties.getAppProperties().getDB_PASSWORD());
		return dataSource;
	}

	@Bean
	@Primary
	public EntityManagerFactory entityManagerFactory() throws NamingException, SQLException {
		HibernateJpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
		jpaVendorAdapter.setGenerateDdl(EmployeesApplicationProperties.getAppProperties().getGENERATE_DDL());
		jpaVendorAdapter.setShowSql(EmployeesApplicationProperties.getAppProperties().getSHOW_SQL());
		LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
		factory.setJpaVendorAdapter(jpaVendorAdapter);
		factory.setDataSource(dataSource());
		factory.setPackagesToScan(AppConstants.SCAN_PACKAGES);
		factory.afterPropertiesSet();
		return factory.getObject();
	}

	@Bean
	@Primary
	public PlatformTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(entityManagerFactory);
		Map<String, String> jpaPropertyMap = new HashMap<>();
		transactionManager.setJpaPropertyMap(jpaPropertyMap);
		return transactionManager;
	}
}
