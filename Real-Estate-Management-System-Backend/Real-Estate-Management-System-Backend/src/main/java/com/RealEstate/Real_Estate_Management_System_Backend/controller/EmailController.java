package com.RealEstate.Real_Estate_Management_System_Backend.controller;

import com.RealEstate.Real_Estate_Management_System_Backend.entity.Client;
import com.RealEstate.Real_Estate_Management_System_Backend.entity.EmailRequest;
import com.RealEstate.Real_Estate_Management_System_Backend.entity.Property;
import com.RealEstate.Real_Estate_Management_System_Backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
public class EmailController {
    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest emailRequest) {
        emailService.sendSimpleEmail(
                emailRequest.getTo(),
                "Property Inquiry: ID# " + emailRequest.getProperty().getGovernIssuedId(),
                "Dear Agent,\n\n" +
                        "A potential client has shown interest in the property with Government Issued ID: " + emailRequest.getProperty().getGovernIssuedId() + ".\n\n" +
                        "**Client Details**\n" +
                        "------------------\n" +
                        "• **Full Name:** " + emailRequest.getClient().getFullName() + "\n" +
                        "• **Contact Number:** " + emailRequest.getClient().getContactNumber() + "\n" +
                        "• **Email Address:** " + emailRequest.getClient().getEmailAddress() + "\n\n" +
                        "Please reach out to the client at your earliest convenience.\n\n" +
                        "Best regards,\n" +
                        "Horizon-Home]"
        );
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
