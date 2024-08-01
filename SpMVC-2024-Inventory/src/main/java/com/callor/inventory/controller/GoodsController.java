package com.callor.inventory.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.GoodsDao;
import com.callor.inventory.dao.StoreDao;
import com.callor.inventory.model.GoodsVO;
import com.callor.inventory.model.ManagerVO;
import com.callor.inventory.model.StoreVO;

@Controller
@RequestMapping(value = "/goods")
public class GoodsController {

	private final GoodsDao goodsDao;
	private final StoreDao storeDao;

	public GoodsController(GoodsDao goodsDao, StoreDao storeDao) {
		super();
		this.goodsDao = goodsDao;
		this.storeDao = storeDao;
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(Model model) {
		List<GoodsVO> goodsList = goodsDao.findAllGoods();
		model.addAttribute("GOODS", goodsList);
		return null;
	}

	@RequestMapping(value = "/management", method = RequestMethod.GET)
	public String management(Model model, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/manager/login-manager";
		}
		String storecode = manager.getM_storecode();
		StoreVO storeVO = storeDao.findByCode(storecode);
		List<GoodsVO> goodsList = goodsDao.findByStoreCode(storecode);
		model.addAttribute("GOODS", goodsList);
		model.addAttribute("STORE", storeVO);
		return null;
	}

	@RequestMapping(value = "/input", method = RequestMethod.GET)
	public String input(String g_code, Model model, HttpSession session) {
		ManagerVO manager = (ManagerVO) session.getAttribute("MANAGER");
		if (manager == null) {
			return "redirect:/manager/login-manager";
		}
		GoodsVO good = goodsDao.findByCode(g_code);
		model.addAttribute("GOOD", good);
		return null;
	}

}
