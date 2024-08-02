package com.callor.inventory.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.ManagerDao;
import com.callor.inventory.model.ManagerVO;

@RequestMapping(value = "/manager")
@Controller
public class ManagerController {

	private final ManagerDao managerDao;

	public ManagerController(ManagerDao managerDao) {
		super();
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

	@RequestMapping(value = "/modify", method = RequestMethod.GET)
	public String modify(HttpSession session, Model model) {
		ManagerVO managerVO = (ManagerVO) session.getAttribute("MANAGER");
		if (managerVO == null) {
			return "redirect:/manager/login-manager";
		}
		model.addAttribute("MANAGER", managerVO);
		return null;
	}

	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String modify(HttpSession session, ManagerVO managerVO) {
		ManagerVO authUser = (ManagerVO) session.getAttribute("MANAGER");
		managerVO.setM_id(authUser.getM_id());
		int result = managerDao.update(managerVO);
		session.setAttribute("MANAGER", managerVO);
		return "redirect:/";
	}

}
