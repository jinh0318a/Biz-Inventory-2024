package com.callor.inventory.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.callor.inventory.dao.GoodsDao;
import com.callor.inventory.model.GoodsVO;

@Controller
public class HomeController {

	private final GoodsDao goodsDao;

	public HomeController(GoodsDao goodsDao) {
		super();
		this.goodsDao = goodsDao;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		List<GoodsVO> goodsList = goodsDao.findAllGoods();
		Collections.shuffle(goodsList);
		List<GoodsVO> random = new ArrayList<>();
		for (int i = 0; i < 5; i++) {
			random.add(goodsList.get(i));
		}
		model.addAttribute("GOODS", random);
		return "home";
	}

	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String join() {
		return null;
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return null;
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}

}
