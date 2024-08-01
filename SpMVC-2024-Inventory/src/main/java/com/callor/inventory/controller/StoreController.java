package com.callor.inventory.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.StoreDao;
import com.callor.inventory.model.StoreVO;

@Controller
@RequestMapping(value = "/store")
public class StoreController {

	private final StoreDao storeDao;

	public StoreController(StoreDao storeDao) {
		super();
		this.storeDao = storeDao;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(Model model) {
		List<StoreVO> storeList = storeDao.findAllStore();
		model.addAttribute("STORELIST", storeList);
		return null;
	}

	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	public String detail(String s_code, Model model) {
		StoreVO storeVO = storeDao.findByCode(s_code);
		model.addAttribute("STORE", storeVO);
		return null;
	}

}
