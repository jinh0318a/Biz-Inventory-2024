package com.callor.inventory.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.ManagerDao;
import com.callor.inventory.model.ManagerVO;
import com.callor.inventory.service.ManagerService;

@RequestMapping(value = "/manager")
@Controller
public class ManagerController {

	private final ManagerService managerService;
	private final ManagerDao managerDao;

	public ManagerController(ManagerService managerService, ManagerDao managerDao) {
		super();
		this.managerService = managerService;
		this.managerDao = managerDao;
	}

	@RequestMapping(value = "/join-manager", method = RequestMethod.GET)
	public String join() {
		return null;
	}

	@RequestMapping(value = "/join-manager", method = RequestMethod.POST)
	public String join(ManagerVO managerVO) {
		managerDao.insert(managerVO);
		return "redirect:/manager/login-manager";
	}

	@RequestMapping(value = "/login-manager", method = RequestMethod.GET)
	public String login() {
		return null;
	}

	@RequestMapping(value = "/login-manager", method = RequestMethod.POST)
	public String login(String m_id, String m_password, HttpSession session) {
		ManagerVO managerVO = managerDao.findByID(m_id);
		if (managerVO == null || !managerVO.getM_password().equals(m_password)) {
			return "redirect:/manager/login-manager";
		}
		session.setAttribute("MANAGER", managerVO);
		return "redirect:/";
	}
}
