package com.sic.SIC.Controller;

import org.apache.catalina.valves.JsonErrorReportValve;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ClientInfoStatus;

@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping
    public String hello() {
        return "GET:: welcome";
    }
}
