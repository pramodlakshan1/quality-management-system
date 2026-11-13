package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    private OrderService orderService1;

    @Autowired
    private OrderService orderService2;

    @GetMapping("/test-scope")
    public String testScope() {
        boolean isSameInstance = (orderService1 == orderService2);

        return "OrderService1 and OrderService 2 is same instance? : " + isSameInstance +
                "<br>OS1 Hash: " + orderService1.hashCode() + orderService2.hashCode();
        }
}
