package com.callor.inventory.service.impl;

import org.springframework.stereotype.Service;

import com.callor.inventory.dao.ManagerDao;
import com.callor.inventory.service.ManagerService;

@Service
public class ManagerServiceImplV1 implements ManagerService {

	private final ManagerDao managerDao;

	public ManagerServiceImplV1(ManagerDao managerDao) {
		super();
		this.managerDao = managerDao;
	}

}
