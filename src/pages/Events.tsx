import { Card, CardActionArea, CardContent, Typography } from "@mui/material"

export default function Events() {
    return (
        <>
            {/* Past events */}
            <section className="text-center flex flex-col justify-center items-center">
                <h2 className="font-bold text-4xl">Past Events</h2>
                <Card
                    sx={{
                        width: 300,
                        height: 380,
                        borderRadius: 5,
                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.12)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "0.4s cubic-bezier(0.5, 1.6, 0.4, 0.8)",
                        "&:hover": {
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        transform: "scale(1.06)",
                        },
                        "&:hover .descriptionBox": {
                        opacity: 1,
                        transform: "translateY(0%)",
                        }
                    }}
                >
                    <CardActionArea sx={{ height: '100%' }}>
                    <CardContent 
                    sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center', 
                        gap: 2
                    }}
                    >
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        hello
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </section>
        </>
    )
}